import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TodoContainerComponent} from './components/todo/todo-container/todo-container.component';
import {PostComponent} from './components/post/post/post.component';

const appRoutes: Routes = [

        {path: 'todo', component: TodoContainerComponent  },
        {path: 'post', component: PostComponent  },

]

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);