import { Command, CommandRunner, Option } from 'nest-commander';

import { DataSourceService } from 'src/engine/metadata-modules/data-source/data-source.service';
import { SeedSpoonMetadataService } from './seed-spoon-metadata.service';

interface SeedSpoonCommandOptions {
  workspaceId: string;
}

@Command({
  name: 'seed-spoon:seed-objects',
  description:
    'Seeds Seed & Spoon nonprofit custom objects (Grants, Volunteers, Impact Metrics, Programs)',
})
export class SeedSpoonMetadataCommand extends CommandRunner {
  constructor(
    private readonly seedSpoonMetadataService: SeedSpoonMetadataService,
    private readonly dataSourceService: DataSourceService,
  ) {
    super();
  }

  @Option({
    flags: '-w, --workspace-id <workspaceId>',
    description: 'Workspace ID to seed custom objects into',
    required: true,
  })
  parseWorkspaceId(value: string): string {
    return value;
  }

  async run(
    _passedParams: string[],
    options: SeedSpoonCommandOptions,
  ): Promise<void> {
    const { workspaceId } = options;

    console.log(`Seeding Seed & Spoon custom objects for workspace: ${workspaceId}`);

    const dataSourceMetadata =
      await this.dataSourceService.getLastDataSourceMetadataFromWorkspaceIdOrFail(
        workspaceId,
      );

    await this.seedSpoonMetadataService.seedSeedSpoonObjects({
      dataSourceMetadata,
      workspaceId,
    });

    console.log('Seed & Spoon custom objects seeded successfully!');
    console.log('Created objects:');
    console.log('  - Grants: Track grant applications and funding');
    console.log('  - Volunteers: Manage volunteer information and hours');
    console.log('  - Impact Metrics: Measure and report program outcomes');
    console.log('  - Programs: Track youth programs and initiatives');
  }
}
