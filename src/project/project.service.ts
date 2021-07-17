import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {

  constructor(@InjectRepository(Project) private projectRepository: Repository<Project>) { }

  create(project: CreateProjectInput): Promise<Project> {
    let proj = this.projectRepository.create(project);
    return this.projectRepository.save(proj);
  }

  findAll(): Promise<Project[]> {
    return this.projectRepository.find({
      relations: ["employees"]
    });
  }

  findOne(id: string): Promise<Project> {
    return this.projectRepository.findOne(id, { relations: ["employees"] })
  }

  update(id: string, updateProjectInput: UpdateProjectInput) {
    let project = this.projectRepository.create(updateProjectInput);
    project.id = id;

    return this.projectRepository.save(project);
  }

  remove(id: string) {
    return this.projectRepository.delete(id);
  }
}
