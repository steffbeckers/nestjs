import { Controller, Get, Post, Body } from "@nestjs/common";
import { SkillsService } from "./skills.service";
import { Skill } from "./skill";

@Controller("skills")
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Get()
  async findAll(): Promise<Skill[]> {
    return this.skillsService.findAll();
  }

  @Post()
  async create(@Body() skill: Skill) {
    return this.skillsService.create(skill);
  }
}
