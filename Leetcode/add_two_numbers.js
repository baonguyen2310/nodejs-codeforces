class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
*/
var addTwoNumbers = function(l1, l2) {
    //l1, l2, l3 la head
    //l1current, l2current, l3current la hien tai

    //gia tri dau
    let tong = l1.val + l2.val
    let lay = tong % 10
    let nho = Math.floor(tong / 10)

    let l3 = new ListNode(lay)

    let l1current = l1
    let l2current = l2
    let l3current = l3

    while (l1current.next != null || l2current.next != null) {
        // xu ly truong hop 2 ben khong bang nhau
        if (l1current.next == null) {
            l1current.next = new ListNode(0)
        }
        if (l2current.next == null) {
            l2current.next = new ListNode(0)
        }

        l1current = l1current.next
        l2current = l2current.next

        let tong = l1current.val + l2current.val + nho
        let lay = tong % 10
        //nho = (tong - (tong % 10))/10
        nho = Math.floor(tong / 10)

        l3current.next = new ListNode(lay)
        l3current = l3current.next
    }

    if (nho > 0) {
        l3current.next = new ListNode(nho)
    }

    return l3
};

var addTwoNumbers2 = function(l1, l2) {
    //gia tri dau
    let dummyHead = new ListNode(0) //đầu giả
    let carry = 0

    let l3Current = dummyHead

    while (l1 || l2 || carry > 0) {
        // xu ly truong hop 2 ben khong bang nhau
        const l1CurrentVal = l1 ? l1.val : 0
        const l2CurrentVal = l2 ? l2.val : 0

        const sum = l1CurrentVal + l2CurrentVal + carry
        l3Current.next = new ListNode(sum % 10)
        carry = Math.floor(sum / 10)

        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
        l3Current = l3Current.next
    }

    return dummyHead.next // bỏ đầu giả
};

let l1 = new ListNode(9, new ListNode(9))
let l2 = new ListNode(1)
let l3 = addTwoNumbers2(l1, l2)
console.log(l3)
