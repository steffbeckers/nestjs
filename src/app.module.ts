import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { DevicesController } from "./devices/devices.controller";

import { SkillsController } from "./skills/skills.controller";
import { SkillsService } from "./skills/skills.service";

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql"
    })
  ],
  controllers: [AppController, DevicesController, SkillsController],
  providers: [AppService, SkillsService]
})
export class AppModule {}
