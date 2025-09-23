import re

class Solution:
    def isPalindrome(self, s: str) -> bool:
        text = re.sub(" ", "", s).lower()
        clean = re.sub(r"[^a-z0-9]", "", text)
        n = len(clean)

        for i in range(n // 2):
            print(clean[i], clean[n - i - 1])
            if(clean[i] != clean[n - i - 1]):
                return False

        return True