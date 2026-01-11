import { FieldMetadataType } from 'twenty-shared/types';

import { type FieldMetadataSeed } from 'src/engine/workspace-manager/dev-seeder/metadata/types/field-metadata-seed.type';

export const VOLUNTEER_CUSTOM_FIELD_SEEDS: FieldMetadataSeed[] = [
  {
    type: FieldMetadataType.FULL_NAME,
    label: 'Full Name',
    name: 'fullName',
  },
  {
    type: FieldMetadataType.EMAILS,
    label: 'Email',
    name: 'email',
  },
  {
    type: FieldMetadataType.PHONES,
    label: 'Phone',
    name: 'phone',
  },
  {
    type: FieldMetadataType.ADDRESS,
    label: 'Address',
    name: 'address',
  },
  {
    type: FieldMetadataType.SELECT,
    label: 'Status',
    name: 'status',
    options: [
      { label: 'Active', value: 'ACTIVE', position: 0, color: 'green' },
      { label: 'Inactive', value: 'INACTIVE', position: 1, color: 'gray' },
      { label: 'Pending', value: 'PENDING', position: 2, color: 'yellow' },
      { label: 'On Leave', value: 'ON_LEAVE', position: 3, color: 'orange' },
    ],
  },
  {
    type: FieldMetadataType.MULTI_SELECT,
    label: 'Skills',
    name: 'skills',
    options: [
      { label: 'Cooking', value: 'COOKING', position: 0, color: 'red' },
      { label: 'Event Planning', value: 'EVENT_PLANNING', position: 1, color: 'blue' },
      { label: 'Teaching', value: 'TEACHING', position: 2, color: 'green' },
      { label: 'Mentoring', value: 'MENTORING', position: 3, color: 'purple' },
      { label: 'Driving', value: 'DRIVING', position: 4, color: 'orange' },
      { label: 'Administration', value: 'ADMINISTRATION', position: 5, color: 'gray' },
      { label: 'Fundraising', value: 'FUNDRAISING', position: 6, color: 'yellow' },
      { label: 'Marketing', value: 'MARKETING', position: 7, color: 'blue' },
      { label: 'IT Support', value: 'IT_SUPPORT', position: 8, color: 'green' },
      { label: 'Photography', value: 'PHOTOGRAPHY', position: 9, color: 'purple' },
    ],
  },
  {
    type: FieldMetadataType.MULTI_SELECT,
    label: 'Availability',
    name: 'availability',
    options: [
      { label: 'Weekday Mornings', value: 'WEEKDAY_MORNINGS', position: 0, color: 'blue' },
      { label: 'Weekday Afternoons', value: 'WEEKDAY_AFTERNOONS', position: 1, color: 'green' },
      { label: 'Weekday Evenings', value: 'WEEKDAY_EVENINGS', position: 2, color: 'purple' },
      { label: 'Weekends', value: 'WEEKENDS', position: 3, color: 'orange' },
      { label: 'On Call', value: 'ON_CALL', position: 4, color: 'red' },
    ],
  },
  {
    type: FieldMetadataType.DATE,
    label: 'Start Date',
    name: 'startDate',
  },
  {
    type: FieldMetadataType.DATE,
    label: 'Background Check Date',
    name: 'backgroundCheckDate',
  },
  {
    type: FieldMetadataType.BOOLEAN,
    label: 'Background Check Passed',
    name: 'backgroundCheckPassed',
  },
  {
    type: FieldMetadataType.NUMBER,
    label: 'Total Hours',
    name: 'totalHours',
  },
  {
    type: FieldMetadataType.TEXT,
    label: 'Emergency Contact Name',
    name: 'emergencyContactName',
  },
  {
    type: FieldMetadataType.PHONES,
    label: 'Emergency Contact Phone',
    name: 'emergencyContactPhone',
  },
  {
    type: FieldMetadataType.RICH_TEXT,
    label: 'Notes',
    name: 'notes',
  },
  {
    type: FieldMetadataType.LINKS,
    label: 'Social Profiles',
    name: 'socialProfiles',
  },
  {
    type: FieldMetadataType.TEXT,
    label: 'Referral Source',
    name: 'referralSource',
  },
  {
    type: FieldMetadataType.RATING,
    label: 'Engagement Level',
    name: 'engagementLevel',
  },
];
