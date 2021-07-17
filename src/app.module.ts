import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { EmployeeModule } from './employee/employee.module';
import { ProjectModule } from './project/project.module';


@Module({
  imports: [EmployeeModule, GraphQLModule.forRoot(
    {
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
    }
  ),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: // server username,
      password: // server password,
      database: //database name,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true
    }),
    ProjectModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
