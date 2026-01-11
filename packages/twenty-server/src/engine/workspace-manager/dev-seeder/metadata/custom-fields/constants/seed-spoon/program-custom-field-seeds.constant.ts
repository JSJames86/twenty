import { FieldMetadataType } from 'twenty-shared/types';

import { type FieldMetadataSeed } from 'src/engine/workspace-manager/dev-seeder/metadata/types/field-metadata-seed.type';

export const PROGRAM_CUSTOM_FIELD_SEEDS: FieldMetadataSeed[] = [
  {
    type: FieldMetadataType.TEXT,
    label: 'Program Name',
    name: 'programName',
  },
  {
    type: FieldMetadataType.RICH_TEXT,
    label: 'Description',
    name: 'description',
  },
  {
    type: FieldMetadataType.SELECT,
    label: 'Status',
    name: 'status',
    options: [
      { label: 'Planning', value: 'PLANNING', position: 0, color: 'gray' },
      { label: 'Active', value: 'ACTIVE', position: 1, color: 'green' },
      { label: 'Paused', value: 'PAUSED', position: 2, color: 'yellow' },
      { label: 'Completed', value: 'COMPLETED', position: 3, color: 'blue' },
      { label: 'Archived', value: 'ARCHIVED', position: 4, color: 'gray' },
    ],
  },
  {
    type: FieldMetadataType.SELECT,
    label: 'Program Type',
    name: 'programType',
    options: [
      { label: 'Youth Development', value: 'YOUTH_DEVELOPMENT', position: 0, color: 'blue' },
      { label: 'Culinary Training', value: 'CULINARY_TRAINING', position: 1, color: 'green' },
      { label: 'Mentorship', value: 'MENTORSHIP', position: 2, color: 'purple' },
      { label: 'Community Outreach', value: 'COMMUNITY_OUTREACH', position: 3, color: 'orange' },
      { label: 'Special Events', value: 'SPECIAL_EVENTS', position: 4, color: 'yellow' },
      { label: 'Food Distribution', value: 'FOOD_DISTRIBUTION', position: 5, color: 'red' },
    ],
  },
  {
    type: FieldMetadataType.MULTI_SELECT,
    label: 'Age Groups',
    name: 'ageGroups',
    options: [
      { label: 'Children (5-12)', value: 'CHILDREN', position: 0, color: 'blue' },
      { label: 'Teens (13-17)', value: 'TEENS', position: 1, color: 'green' },
      { label: 'Young Adults (18-24)', value: 'YOUNG_ADULTS', position: 2, color: 'purple' },
      { label: 'Adults (25+)', value: 'ADULTS', position: 3, color: 'orange' },
      { label: 'All Ages', value: 'ALL_AGES', position: 4, color: 'gray' },
    ],
  },
  {
    type: FieldMetadataType.DATE,
    label: 'Start Date',
    name: 'startDate',
  },
  {
    type: FieldMetadataType.DATE,
    label: 'End Date',
    name: 'endDate',
  },
  {
    type: FieldMetadataType.NUMBER,
    label: 'Capacity',
    name: 'capacity',
  },
  {
    type: FieldMetadataType.NUMBER,
    label: 'Current Enrollment',
    name: 'currentEnrollment',
  },
  {
    type: FieldMetadataType.CURRENCY,
    label: 'Budget',
    name: 'budget',
  },
  {
    type: FieldMetadataType.CURRENCY,
    label: 'Actual Cost',
    name: 'actualCost',
  },
  {
    type: FieldMetadataType.TEXT,
    label: 'Location',
    name: 'location',
  },
  {
    type: FieldMetadataType.TEXT,
    label: 'Lead Staff',
    name: 'leadStaff',
  },
  {
    type: FieldMetadataType.MULTI_SELECT,
    label: 'Days of Week',
    name: 'daysOfWeek',
    options: [
      { label: 'Monday', value: 'MONDAY', position: 0, color: 'blue' },
      { label: 'Tuesday', value: 'TUESDAY', position: 1, color: 'green' },
      { label: 'Wednesday', value: 'WEDNESDAY', position: 2, color: 'purple' },
      { label: 'Thursday', value: 'THURSDAY', position: 3, color: 'orange' },
      { label: 'Friday', value: 'FRIDAY', position: 4, color: 'yellow' },
      { label: 'Saturday', value: 'SATURDAY', position: 5, color: 'red' },
      { label: 'Sunday', value: 'SUNDAY', position: 6, color: 'gray' },
    ],
  },
  {
    type: FieldMetadataType.RICH_TEXT,
    label: 'Goals',
    name: 'goals',
  },
  {
    type: FieldMetadataType.ARRAY,
    label: 'Key Outcomes',
    name: 'keyOutcomes',
  },
  {
    type: FieldMetadataType.LINKS,
    label: 'Resources',
    name: 'resources',
  },
  {
    type: FieldMetadataType.RATING,
    label: 'Priority',
    name: 'priority',
  },
];
