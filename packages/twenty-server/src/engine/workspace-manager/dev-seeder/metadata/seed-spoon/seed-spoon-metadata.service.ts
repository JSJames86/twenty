import { Injectable } from '@nestjs/common';

import { isDefined } from 'twenty-shared/utils';

import { type DataSourceEntity } from 'src/engine/metadata-modules/data-source/data-source.entity';
import { FieldMetadataService } from 'src/engine/metadata-modules/field-metadata/services/field-metadata.service';
import { ObjectMetadataService } from 'src/engine/metadata-modules/object-metadata/object-metadata.service';
import {
  GRANT_CUSTOM_FIELD_SEEDS,
  IMPACT_METRIC_CUSTOM_FIELD_SEEDS,
  PROGRAM_CUSTOM_FIELD_SEEDS,
  VOLUNTEER_CUSTOM_FIELD_SEEDS,
} from 'src/engine/workspace-manager/dev-seeder/metadata/custom-fields/constants/seed-spoon';
import {
  GRANT_CUSTOM_OBJECT_SEED,
  IMPACT_METRIC_CUSTOM_OBJECT_SEED,
  PROGRAM_CUSTOM_OBJECT_SEED,
  VOLUNTEER_CUSTOM_OBJECT_SEED,
} from 'src/engine/workspace-manager/dev-seeder/metadata/custom-objects/constants/seed-spoon';
import { type FieldMetadataSeed } from 'src/engine/workspace-manager/dev-seeder/metadata/types/field-metadata-seed.type';
import { type ObjectMetadataSeed } from 'src/engine/workspace-manager/dev-seeder/metadata/types/object-metadata-seed.type';

/**
 * Service for seeding Seed & Spoon nonprofit custom objects
 *
 * This service creates the following custom objects in a workspace:
 * - Grants: Track grant applications and funding
 * - Volunteers: Manage volunteer information and hours
 * - Impact Metrics: Measure and report program outcomes
 * - Programs: Track youth programs and initiatives
 */
@Injectable()
export class SeedSpoonMetadataService {
  constructor(
    private readonly objectMetadataService: ObjectMetadataService,
    private readonly fieldMetadataService: FieldMetadataService,
  ) {}

  /**
   * Seeds all Seed & Spoon custom objects for a workspace
   */
  public async seedSeedSpoonObjects({
    dataSourceMetadata,
    workspaceId,
  }: {
    dataSourceMetadata: DataSourceEntity;
    workspaceId: string;
  }): Promise<void> {
    const customObjects: {
      seed: ObjectMetadataSeed;
      fields: FieldMetadataSeed[];
    }[] = [
      { seed: GRANT_CUSTOM_OBJECT_SEED, fields: GRANT_CUSTOM_FIELD_SEEDS },
      {
        seed: VOLUNTEER_CUSTOM_OBJECT_SEED,
        fields: VOLUNTEER_CUSTOM_FIELD_SEEDS,
      },
      {
        seed: IMPACT_METRIC_CUSTOM_OBJECT_SEED,
        fields: IMPACT_METRIC_CUSTOM_FIELD_SEEDS,
      },
      { seed: PROGRAM_CUSTOM_OBJECT_SEED, fields: PROGRAM_CUSTOM_FIELD_SEEDS },
    ];

    for (const customObject of customObjects) {
      await this.seedCustomObject({
        dataSourceId: dataSourceMetadata.id,
        workspaceId,
        objectMetadataSeed: customObject.seed,
      });

      await this.seedCustomFields({
        workspaceId,
        objectMetadataNameSingular: customObject.seed.nameSingular,
        fieldMetadataSeeds: customObject.fields,
      });
    }
  }

  /**
   * Seeds a single custom object
   */
  private async seedCustomObject({
    dataSourceId,
    workspaceId,
    objectMetadataSeed,
  }: {
    dataSourceId: string;
    workspaceId: string;
    objectMetadataSeed: ObjectMetadataSeed;
  }): Promise<void> {
    await this.objectMetadataService.createOneObject({
      createObjectInput: {
        ...objectMetadataSeed,
        dataSourceId,
      },
      workspaceId,
    });
  }

  /**
   * Seeds custom fields for an object
   */
  private async seedCustomFields({
    workspaceId,
    objectMetadataNameSingular,
    fieldMetadataSeeds,
  }: {
    workspaceId: string;
    objectMetadataNameSingular: string;
    fieldMetadataSeeds: FieldMetadataSeed[];
  }): Promise<void> {
    const objectMetadata =
      await this.objectMetadataService.findOneWithinWorkspace(workspaceId, {
        where: { nameSingular: objectMetadataNameSingular },
      });

    if (!isDefined(objectMetadata)) {
      throw new Error(
        `Object metadata not found for: ${objectMetadataNameSingular}`,
      );
    }

    const createFieldInputs = fieldMetadataSeeds.map((fieldMetadataSeed) => ({
      ...fieldMetadataSeed,
      objectMetadataId: objectMetadata.id,
    }));

    await this.fieldMetadataService.createManyFields({
      createFieldInputs,
      workspaceId,
    });
  }

  /**
   * Gets the list of Seed & Spoon custom object names
   */
  public getSeedSpoonObjectNames(): string[] {
    return [
      GRANT_CUSTOM_OBJECT_SEED.nameSingular,
      VOLUNTEER_CUSTOM_OBJECT_SEED.nameSingular,
      IMPACT_METRIC_CUSTOM_OBJECT_SEED.nameSingular,
      PROGRAM_CUSTOM_OBJECT_SEED.nameSingular,
    ];
  }
}
