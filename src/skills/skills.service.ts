import { Injectable } from "@nestjs/common";
import { Skill } from "./skill";

@Injectable()
export class SkillsService {
  private readonly skills: Skill[] = [];

  create(skill: Skill) {
    this.skills.push(skill);
    return skill;
  }

  findAll(): Skill[] {
    return this.skills;
  }

  findOne(): Skill {
    return new Skill();
  }
}
