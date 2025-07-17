function maximumOddBinaryNumber(s: string): string {
    const oneCount = (s.match(/1/g) ?? []).length
    const zeroCount = s.length - oneCount
    return '1'.repeat(oneCount - 1) + '0'.repeat(zeroCount) + (oneCount >= 1 ? '1' : '')
};