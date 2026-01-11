import { Module } from '@nestjs/common';

import { FieldMetadataModule } from 'src/engine/metadata-modules/field-metadata/field-metadata.module';
import { ObjectMetadataModule } from 'src/engine/metadata-modules/object-metadata/object-metadata.module';
import { SeedSpoonMetadataService } from './seed-spoon-metadata.service';

@Module({
  imports: [ObjectMetadataModule, FieldMetadataModule],
  providers: [SeedSpoonMetadataService],
  exports: [SeedSpoonMetadataService],
})
export class SeedSpoonMetadataModule {}
