const mock = {
    isOpen: true,
    loan: require('./loan.json')
};

console.log(`%c Mock: ${mock.isOpen ? 'on' : 'off'} `, 'background: #222; color: #bada55');

export default mock;
