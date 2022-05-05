export function findItemByArray(arr, id, returnArray = false) {
    let item;

    function findInArray(arr, id, returnArray = false) {
        for (let index = 0; index < arr.length; index++) {
            const elem = arr[index];

            if (elem.id === id) {
                item = returnArray ? arr : elem;
                break;
            } else if (elem.children && elem.children.length) {
                findInArray(elem.children, id, returnArray);
            }
        }
    }

    findInArray(arr, id, returnArray);
    return item;
}
