export enum Gender {
  MALE = "Male",
  FEMALE = "Female",
}
export enum LookingType {
  casualDating = "casualDating",
  coupleOfDates = "coupleOfDates",
  seriousRelationship = "seriousRelationship",
}

export enum Looking {
  seeking = "seeking",
  iam = "iam",
}

export type User = {
  username: string;
  email: string;
  userId: string;
  DOB: string;
  gender: Gender | "";
  location: string;
  password: string;
  looking_for: Gender | "";
  looking_type: LookingType | "";
};
