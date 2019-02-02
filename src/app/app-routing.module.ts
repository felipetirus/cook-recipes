import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { MessageComponent } from "./message/message.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: "full"}, 
    { path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: MessageComponent, data: {message: "Please Select a Recipe!"}},
      { path: 'new', component: RecipeEditComponent},
      { path: ':id', component: RecipeDetailComponent},
      { path: ':id/edit', component: RecipeEditComponent}

    ]},
    { path: 'shopping-list', component: ShoppingListComponent}
    
   /* { path: 'servers', 
      //canActivate: [AuthGuard],
      canActivateChild: [AuthGuard],
      component: ServersComponent, children: [
        { path: ':id', component: ServerComponent, resolve: {server: ServerResolver}},
        { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]}
      ]
    },*/
    // { path: 'not-found', component: PageNotFoundComponent},
    // { path: 'not-found', component: ErroPageComponent, data: {message: 'Page not found!'}},
    // { path: '**', redirectTo: 'not-found'}   
    
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}