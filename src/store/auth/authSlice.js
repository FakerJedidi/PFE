import{createSlcie,}from '@reduxjs/toolkit';
import { signInUser } from './service';


const initialState:UserData={
    loading:false,
    error:false,
    message:'',
    License:null,
    currentSites:null,
    user: Key,
    settingsPause: settingsPause,
    employees:[],
    nextlevel:20,
    mustUpdateApp:0,
}


const authSlice=createSlcie({
    name:'Auth',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(signInUser.pending, (state: any) => {
            state.loading = true;
            state.error = false
            state.message = 'Loading';

        });
        builder.addCase(signInUser.fullfiled, (state: any, action:any) => {
            const { key,
                settingsPause,
                License,
                employees,
                settings,} = action.payload
            state.loading = false;
            state.error = false
            state.message = 'success';
            state.employees=employees;
            state.settingsPause=settingsPause;
            state.license=License;
            state.settings=settings;
            
        });
        builder.addCase(signInUser.rejected, (state: any) => {
            state.loading = false;
            state.error = true
            state.message = 'error!';
            
        });

    }
        
})