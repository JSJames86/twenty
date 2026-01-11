import { FieldMetadataType } from 'twenty-shared/types';

import { type FieldMetadataSeed } from 'src/engine/workspace-manager/dev-seeder/metadata/types/field-metadata-seed.type';

export const IMPACT_METRIC_CUSTOM_FIELD_SEEDS: FieldMetadataSeed[] = [
  {
    type: FieldMetadataType.TEXT,
    label: 'Metric Name',
    name: 'metricName',
  },
  {
    type: FieldMetadataType.SELECT,
    label: 'Category',
    name: 'category',
    options: [
      { label: 'Youth Served', value: 'YOUTH_SERVED', position: 0, color: 'blue' },
      { label: 'Meals Provided', value: 'MEALS_PROVIDED', position: 1, color: 'green' },
      { label: 'Volunteer Hours', value: 'VOLUNTEER_HOURS', position: 2, color: 'purple' },
      { label: 'Skills Taught', value: 'SKILLS_TAUGHT', position: 3, color: 'orange' },
      { label: 'Events Held', value: 'EVENTS_HELD', position: 4, color: 'yellow' },
      { label: 'Partner Engagements', value: 'PARTNER_ENGAGEMENTS', position: 5, color: 'red' },
      { label: 'Funds Raised', value: 'FUNDS_RAISED', position: 6, color: 'green' },
      { label: 'Community Reach', value: 'COMMUNITY_REACH', position: 7, color: 'blue' },
    ],
  },
  {
    type: FieldMetadataType.NUMBER,
    label: 'Value',
    name: 'value',
  },
  {
    type: FieldMetadataType.NUMBER,
    label: 'Target',
    name: 'target',
  },
  {
    type: FieldMetadataType.TEXT,
    label: 'Unit',
    name: 'unit',
  },
  {
    type: FieldMetadataType.DATE,
    label: 'Measurement Date',
    name: 'measurementDate',
  },
  {
    type: FieldMetadataType.SELECT,
    label: 'Period',
    name: 'period',
    options: [
      { label: 'Daily', value: 'DAILY', position: 0, color: 'gray' },
      { label: 'Weekly', value: 'WEEKLY', position: 1, color: 'blue' },
      { label: 'Monthly', value: 'MONTHLY', position: 2, color: 'green' },
      { label: 'Quarterly', value: 'QUARTERLY', position: 3, color: 'purple' },
      { label: 'Yearly', value: 'YEARLY', position: 4, color: 'orange' },
    ],
  },
  {
    type: FieldMetadataType.TEXT,
    label: 'Program',
    name: 'program',
  },
  {
    type: FieldMetadataType.TEXT,
    label: 'Data Source',
    name: 'dataSource',
  },
  {
    type: FieldMetadataType.RICH_TEXT,
    label: 'Notes',
    name: 'notes',
  },
  {
    type: FieldMetadataType.BOOLEAN,
    label: 'Verified',
    name: 'isVerified',
  },
  {
    type: FieldMetadataType.RAW_JSON,
    label: 'Breakdown Data',
    name: 'breakdownData',
  },
];
