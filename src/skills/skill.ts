export interface ISkill {
  name: string;
  rating: number;
}

export class Skill implements ISkill {
  public name: string;
  public rating: number;

  constructor(skill?: ISkill) {
    if (skill) {
      this.name = skill.name;
      this.rating = skill.rating;
    }
  }
}
