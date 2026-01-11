import { FieldMetadataType } from 'twenty-shared/types';

import { type FieldMetadataSeed } from 'src/engine/workspace-manager/dev-seeder/metadata/types/field-metadata-seed.type';

export const GRANT_CUSTOM_FIELD_SEEDS: FieldMetadataSeed[] = [
  {
    type: FieldMetadataType.TEXT,
    label: 'Funder Name',
    name: 'funderName',
  },
  {
    type: FieldMetadataType.CURRENCY,
    label: 'Amount Requested',
    name: 'amountRequested',
  },
  {
    type: FieldMetadataType.CURRENCY,
    label: 'Amount Awarded',
    name: 'amountAwarded',
  },
  {
    type: FieldMetadataType.SELECT,
    label: 'Stage',
    name: 'stage',
    options: [
      { label: 'Prospect', value: 'PROSPECT', position: 0, color: 'gray' },
      {
        label: 'Letter of Intent',
        value: 'LETTER_OF_INTENT',
        position: 1,
        color: 'blue',
      },
      { label: 'Application Submitted', value: 'SUBMITTED', position: 2, color: 'yellow' },
      { label: 'Under Review', value: 'UNDER_REVIEW', position: 3, color: 'orange' },
      { label: 'Awarded', value: 'AWARDED', position: 4, color: 'green' },
      { label: 'Reporting', value: 'REPORTING', position: 5, color: 'purple' },
      { label: 'Closed', value: 'CLOSED', position: 6, color: 'gray' },
      { label: 'Declined', value: 'DECLINED', position: 7, color: 'red' },
    ],
  },
  {
    type: FieldMetadataType.SELECT,
    label: 'Grant Type',
    name: 'grantType',
    options: [
      { label: 'General Operating', value: 'GENERAL_OPERATING', position: 0, color: 'blue' },
      { label: 'Program Specific', value: 'PROGRAM_SPECIFIC', position: 1, color: 'green' },
      { label: 'Capital', value: 'CAPITAL', position: 2, color: 'purple' },
      { label: 'Capacity Building', value: 'CAPACITY_BUILDING', position: 3, color: 'orange' },
      { label: 'Emergency', value: 'EMERGENCY', position: 4, color: 'red' },
    ],
  },
  {
    type: FieldMetadataType.DATE,
    label: 'Deadline',
    name: 'deadline',
  },
  {
    type: FieldMetadataType.DATE,
    label: 'Award Date',
    name: 'awardDate',
  },
  {
    type: FieldMetadataType.DATE,
    label: 'Report Due Date',
    name: 'reportDueDate',
  },
  {
    type: FieldMetadataType.RICH_TEXT,
    label: 'Description',
    name: 'description',
  },
  {
    type: FieldMetadataType.RICH_TEXT,
    label: 'Requirements',
    name: 'requirements',
  },
  {
    type: FieldMetadataType.TEXT,
    label: 'Program Area',
    name: 'programArea',
  },
  {
    type: FieldMetadataType.BOOLEAN,
    label: 'Is Restricted',
    name: 'isRestricted',
  },
  {
    type: FieldMetadataType.BOOLEAN,
    label: 'Renewable',
    name: 'isRenewable',
  },
  {
    type: FieldMetadataType.LINKS,
    label: 'Funder Website',
    name: 'funderWebsite',
  },
  {
    type: FieldMetadataType.EMAILS,
    label: 'Contact Email',
    name: 'contactEmail',
  },
  {
    type: FieldMetadataType.PHONES,
    label: 'Contact Phone',
    name: 'contactPhone',
  },
  {
    type: FieldMetadataType.TEXT,
    label: 'Contact Name',
    name: 'contactName',
  },
  {
    type: FieldMetadataType.RATING,
    label: 'Priority',
    name: 'priority',
  },
  {
    type: FieldMetadataType.RAW_JSON,
    label: 'Additional Data',
    name: 'additionalData',
  },
];
