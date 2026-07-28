export interface StateOption {
  code: string;
  name: string;
  ut?: boolean;
}

// 28 states + 8 union territories + 1 "All India (Central exams)" option.
export const STATES: StateOption[] = [
  { code: 'AI', name: 'All India (Central exams)' },
  // States (28)
  { code: 'AP', name: 'Andhra Pradesh' },
  { code: 'AR', name: 'Arunachal Pradesh' },
  { code: 'AS', name: 'Assam' },
  { code: 'BR', name: 'Bihar' },
  { code: 'CT', name: 'Chhattisgarh' },
  { code: 'GA', name: 'Goa' },
  { code: 'GJ', name: 'Gujarat' },
  { code: 'HR', name: 'Haryana' },
  { code: 'HP', name: 'Himachal Pradesh' },
  { code: 'JH', name: 'Jharkhand' },
  { code: 'KA', name: 'Karnataka' },
  { code: 'KL', name: 'Kerala' },
  { code: 'MP', name: 'Madhya Pradesh' },
  { code: 'MH', name: 'Maharashtra' },
  { code: 'MN', name: 'Manipur' },
  { code: 'ML', name: 'Meghalaya' },
  { code: 'MZ', name: 'Mizoram' },
  { code: 'NL', name: 'Nagaland' },
  { code: 'OD', name: 'Odisha' },
  { code: 'PB', name: 'Punjab' },
  { code: 'RJ', name: 'Rajasthan' },
  { code: 'SK', name: 'Sikkim' },
  { code: 'TN', name: 'Tamil Nadu' },
  { code: 'TG', name: 'Telangana' },
  { code: 'TR', name: 'Tripura' },
  { code: 'UP', name: 'Uttar Pradesh' },
  { code: 'UK', name: 'Uttarakhand' },
  { code: 'WB', name: 'West Bengal' },
  // Union territories (8)
  { code: 'AN', name: 'Andaman & Nicobar Islands', ut: true },
  { code: 'CH', name: 'Chandigarh', ut: true },
  { code: 'DH', name: 'Dadra & Nagar Haveli and Daman & Diu', ut: true },
  { code: 'DL', name: 'Delhi', ut: true },
  { code: 'JK', name: 'Jammu & Kashmir', ut: true },
  { code: 'LA', name: 'Ladakh', ut: true },
  { code: 'LD', name: 'Lakshadweep', ut: true },
  { code: 'PY', name: 'Puducherry', ut: true },
];

export const STATE_NAME: Record<string, string> = Object.fromEntries(
  STATES.map((s) => [s.code, s.name])
);
