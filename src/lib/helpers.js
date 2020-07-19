export const asyncLocalStorage = {
    setItem: function (key, value) {
        return Promise.resolve().then(function () {
            localStorage.setItem(key, value);
        });
    },
    getItem: function (key) {
        return Promise.resolve().then(function () {
            return localStorage.getItem(key);
        });
    },
    removeItem: function (key) {
        return Promise.resolve().then(function () {
            return localStorage.removeItem(key);
        });
    },
    clear: function () {
        return Promise.resolve().then(function () {
            return localStorage.clear();
        });
    }
};

