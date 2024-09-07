export const state = () => ({
    step: 1
});

export const mutations = {
    increment(state) {
        state.step += 1;
    },
    decrease(state) {
        state.step -= 1;
    }
}