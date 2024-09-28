import { getField, updateField } from 'vuex-map-fields';

export const state = () => ({
    step: 1,
    date: '',
    lake: '',
    dock: '',
    boat: '',
    hp: '',
    passengers: '',
    licenses: '',
    color: '',
    time: '',
    city: 'Ho Chi Minh',
    totalMinutes: 0,
});

export const getters = {
    getField,
};
  
export const mutations = {
    updateField,
};