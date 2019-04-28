import { Recipe } from './recipe.model';

export interface RequestRecipe{
    href: String,
    results: Recipe[],
    title: String,
    version: Number
}