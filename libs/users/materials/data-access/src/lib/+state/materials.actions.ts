import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IFolder } from '../models/folders.model';
import { IMaterial } from '../models/material.model';

// folders
export const materialActions  = createActionGroup({
  source: '[Materials Page]',
  events: {
    'Load Folders': emptyProps(),
    'Load Folders Success': props<{ folders: IFolder[] }>(),
    'Load Folders Failure': props<{ error: never }>(),

    'Delete Folder': props<{ id: number }>(),
    'Delete Folder Success': props<{ id: number }>(),
    'Delete Folder Failure': props<{ error: never }>(),

    'Add Folder': props<{ folder: IFolder }>(),
    'Add Folder Success': props<{ folder: IFolder }>(),
    'Add Folder Failure': props<{ error: never }>(),

    'Open Folder': emptyProps(),
    'Open Folder Success': props<{ folder: IFolder }>(),
    'Open Folder Failure': props<{ error: never }>(),

    'Load Materials': emptyProps(),
    'Load Materials Success': props<{ materials: IMaterial[] }>(),
    'Load Materials Failure': props<{ error: never }>(),

    'Delete Material': props<{ id: number }>(),
    'Delete Material Success': props<{ id: number }>(), // Note: this might be a typo
    'Delete Material Failure': props<{ error: never }>(),

    'Add Material': props<{ material: IMaterial }>(),
    'Add Material Success': props<{ material: IMaterial }>(),
    'Add Material Failure': props<{ error: never }>()
  }
});


