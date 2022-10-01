#include <bits/stdc++.h>
#include <iostream>
#include <ext/pb_ds/assoc_container.hpp>
#include <ext/pb_ds/tree_policy.hpp>
#define vi vector<int>
#define vvi vector<vector<int>>
#define vvlli vector<vector<long long int>>
#define vlli vector<long long int>
#define lli long long int
#define pb push_back
#define fr(i, j, k, in) for (int i = j; i < k; i += in)
#define IOS                  \
    ios::sync_with_stdio(0); \
    cin.tie(0);              \
    cout.tie(0)
using namespace std;
// using namespace __gnu_pbds;
// typedef tree<int, null_type, less<int>, rb_tree_tag, tree_order_statistics_node_update> pbds;

// int GCD(int A, int B) {if (B == 0)return A; else return GCD(B, A % B);}
// lli binExp(lli a, lli b) {lli ans = 1; lli temp = a; while (b) {if (b & 1) ans *= temp; b = b >> 1; temp *= a;} return ans;}

// Try casework elimination
// Pass vectors/matrices by address to reduce time taken for function call
// !

void solve()
{
    lli n;
    cin >> n;
    vector<lli> arr;
    for (lli i = 0; i < n; i++)
        cin >> arr[i];
    if (n == 1)
    {
        cout << 0 << endl;
        return;
    }
    lli mini, maxi = INT_MIN;
    for (int i = 1; i < n; i++)
        maxi = max(maxi, arr[i]);
    for (int i = 0; i < n - 1; i++)
        mini = min(mini, arr[i]);
    cout << max(arr[n - 1] - mini, maxi - arr[0]) << endl;
    return;
}

int main()
{
    // #ifndef ONLINE_JUDGE
    //     freopen("input.txt", "r", stdin);
    //     freopen("output.txt", "w", stdout);
    // #endif
    IOS;
    //    FOR CP
    int t;
    cin >> t;
    while (t--)
        solve();
    //    solve();

    // FOR GOOGLE
    // int t; cin >> t; fr(i, 0, t, 1) {cout << "Case #" << i + 1 << ": "; solve();}
    return 0;
}