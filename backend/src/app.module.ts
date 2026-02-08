import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { PatientsModule } from './patients/patients.module';
import { EncountersModule } from './encounters/encounters.module';
import { PrescriptionsModule } from './prescriptions/prescriptions.module';
import { PharmacyModule } from './pharmacy/pharmacy.module';
import { ClaimsModule } from './claims/claims.module';
import { ReferenceDataModule } from './reference-data/reference-data.module';
import { AuditModule } from './audit/audit.module';
import { PrismaModule } from './common/prisma.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    OrganizationsModule,
    PatientsModule,
    EncountersModule,
    PrescriptionsModule,
    PharmacyModule,
    ClaimsModule,
    ReferenceDataModule,
    AuditModule,
  ],
})
export class AppModule {}
