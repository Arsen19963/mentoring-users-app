import { createReducer, on } from '@ngrx/store';
import { materialActions } from './materials.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { IFolder } from '../models/folders.model';
import { LoadingStatus } from '@users/core/data-access';
import { IMaterial } from '../models/material.model';

export const MATERIALS_FEATURE_KEY = 'materials';

export interface MaterialsState extends EntityState<IFolder> {
  materials: IMaterial[],
  status: LoadingStatus
}

export const materialsAdapter: EntityAdapter<IFolder> = createEntityAdapter<IFolder>();

export const initialMaterialsState: MaterialsState = materialsAdapter.getInitialState({
  materials: [],
  status: 'init'
});

export const reducer = createReducer(
  initialMaterialsState,
  // folders
  on(materialActions.loadFolders, (state) => ({
    ...state, status: 'loading' as const
  })),
  on(materialActions.loadFoldersSuccess, (state, { folders }) =>
    materialsAdapter.setAll(folders, { ...state, status: 'loaded' as const })
  ),
  on(materialActions.loadFoldersFailure, (state, { error }) => ({
      ...state, status: 'error' as const, error
    })
  ),

  on(materialActions.deleteFolderSuccess, (state, { id }) =>
    materialsAdapter.removeOne(id, { ...state })
  ),
  on(materialActions.deleteFolderFailure, (state, { error }) => ({
      ...state, status: 'error' as const, error
    })
  ),

  on(materialActions.addFolderSuccess, (state, { folder }) =>
    materialsAdapter.addOne(folder, { ...state })
  ),
  on(materialActions.addFolderFailure, (state, { error }) => ({
      ...state, status: 'error' as const, error
    })
  ),

  on(materialActions.openFolder, (state) => ({
      ...state, status: 'loading' as const
    })
  ),
  on(materialActions.openFolderSuccess, (state, { folder }) =>
    materialsAdapter.addOne({ ...folder }, { ...state, status: 'loaded' as const })
  ),
  on(materialActions.openFolderFailure, (state, { error }) => ({
      ...state, status: 'error' as const, error
    })
  ),

  // materials
  on(materialActions.loadMaterials, (state) => ({
      ...state, status: 'loading' as const
    })
  ),
  on(materialActions.loadMaterialsSuccess, (state, { materials }) => ({
      ...state, materials, status: 'loaded' as const
    })
  ),
  on(materialActions.loadMaterialsFailure, (state, { error }) => ({
      ...state, status: 'error' as const, error
    })
  ),

  on(materialActions.deleteMaterialSuccess, (state, { id }) =>
    materialsAdapter.removeOne(id, { ...state })
  ),
  on(materialActions.deleteMaterialFailure, (state, { error }) => ({
      ...state, status: 'error' as const, error
    })
  ),

  on(materialActions.addMaterialSuccess, (state, { material }) => ({
      ...state, materials: [...state.materials, material]
    })
  ),

  on(materialActions.addMaterialFailure, (state, { error }) => ({
      ...state, status: 'error' as const, error
    })
  )
);
