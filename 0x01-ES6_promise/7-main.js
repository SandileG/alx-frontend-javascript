import loadBalancer from "./7-load_balancer";

const ukSuccess = 'Downloading from UK is faster';
const frSuccess = 'Downloading from FR is faster';

const promiseUK = new Promise(function(resolve) {
    setTimeout(resolve, 100, ukSuccess);
});

const promiseUKSlow = new Promise(function(resolve) {
    setTimeout(resolve, 400, ukSuccess);
});

const promiseFR = new Promise(function(resolve) {
    setTimeout(resolve, 200, frSuccess);
});

const test = async () => {
    console.log(await loadBalancer(promiseUK, promiseFR)); // Should log: Downloading from UK is faster
    console.log(await loadBalancer(promiseUKSlow, promiseFR)); // Should log: Downloading from FR is faster
}

test();
