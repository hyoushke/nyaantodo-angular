import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TodoContainerComponent} from './components/todo/todo-container/todo-container.component';
import {PostComponent} from './components/post/post/post.component';
import {LoginComponent} from './components/login/login/login.component';
import {RegisterComponent} from './components/register/register/register.component';

const appRoutes: Routes = [

        {path: 'todo', component: TodoContainerComponent  },
        {path: 'post', component: PostComponent  },
        {path: 'login', component: LoginComponent  },
        {path: 'register', component: RegisterComponent  },

]

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
