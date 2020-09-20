//Java Solution

class Solution {
    public TreeNode sortedListToBST(ListNode head) {
        List<Integer> nums = new ArrayList<>();
        
        while (head != null) {
            nums.add(head.val);
            head = head.next;
        }
        
        int start = 0;
        int end = nums.size() - 1;
        
        return dfs(nums, start, end);
    }
    
    public TreeNode dfs(List nums, int start, int end) {
        if (start > end) {
            return null;
        }
        
        int mid = (start + end) / 2;
        TreeNode root = new TreeNode((int) nums.get(mid));
        root.left = dfs(nums, start, mid - 1);
        root.right = dfs(nums, mid + 1, end);
        
        return root;
    }
}