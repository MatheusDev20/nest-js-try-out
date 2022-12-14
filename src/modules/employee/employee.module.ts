import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from '../departments/department.entity';
import { DepartmentsService } from '../departments/department.service';
import { EmployeeController } from './employee.controller';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, Department])],
  controllers: [EmployeeController],
  providers: [EmployeeService, DepartmentsService],
})
export class EmployeeModule {}
