import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainDbzComponent } from './pages/main-dbz.component';
import { HeroesModule } from '../heroes/heroes.module';

@NgModule({
  declarations: [MainDbzComponent],
  exports: [MainDbzComponent],
  imports: [CommonModule, FormsModule, HeroesModule],
})
export class DbzModule {}
