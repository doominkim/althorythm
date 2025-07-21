/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class FindElements {
    node: TreeNode
    constructor(root: TreeNode | null) {
        this.node = root
        this.recover(this.node, 0)
    }

    recover(cur: TreeNode | null, recoverdValue: number): void {
        if (!cur) return
        cur.val = recoverdValue        // 1. 현재 노드 처리
        this.recover(cur.left, 2 * cur.val + 1)               // 2. 왼쪽 자식 재귀
        this.recover(cur.right, 2 * cur.val + 2)              // 3. 오른쪽 자식 재귀
    }

    find(target: number): boolean {
        return this.findDfs(this.node, target)
    }

    findDfs(cur: TreeNode, target: number): boolean {
        if(!cur) return false
        if(cur.val === target) return true
        
        return this.findDfs(cur.left, target) || this.findDfs(cur.right, target)
    }
}

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */