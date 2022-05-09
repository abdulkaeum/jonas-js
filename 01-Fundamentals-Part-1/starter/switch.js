const day = 'tuesday';

switch (day) {
    case 'monday':
        console.log('monday');
        break;
    case 'tuesday':
    case 'wednesday':
        console.log('t & w');
        break;
    default:
        console.log('default');
}