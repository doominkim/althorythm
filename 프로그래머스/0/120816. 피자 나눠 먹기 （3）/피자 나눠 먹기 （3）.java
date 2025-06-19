import java.util.*;

class Solution {
    public int solution(int slice, int n) {
        return (int) Math.ceil(n / slice) + (n % slice == 0 ? 0 : 1);
    }
}