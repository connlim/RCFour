export class AppUser {
  uid: string;
  name: string;
  email: string;
  profile: string


  constructor(uid: string, name: string, email: string, profile: string) {
    this.uid = uid;
    this.name = name;
    this.email = email;
    this.profile = profile;
  }

  toString(): string {
    return this.name;
  }
}
