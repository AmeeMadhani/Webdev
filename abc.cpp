//you are planning to install a fibre cable setup in school
// the cost of installing an optical fiber wired line for each school's route is the same.
//you are requested to design a strategy for connecting all schools in the minimum possible ways so that the wired line of one route should not repeat twice and not form a cycle.
//code to calculate the number of ways to connect all the schools using kruskals algorithm
//example
//input
// total number of schools - 4
// total identified routes - 4
// 1 3 (route from 1 to 3)
// 1 4 (route from 1 to 4)
// 2 4 (route from 2 to 4)
// 3 4 (route from 3 to 4)

//output
//3 (number of ways to connect all the schools)

//input
// total number of schools 4
//  total identified routes 3
// 1 2 (rotue from 1 to 2)
// 1 3 (route from 1 to 3)
// 3 4 (route from 3 to 4)

//output 
// 1 (number of ways to connect all the schools)

#include <bits/stdc++.h>
using namespace std;
#define ll long long

int find(int x, int parent[])
{
    if (parent[x] == x)
        return x;
    return parent[x] = find(parent[x], parent);
}

void union1(int x, int y, int parent[], int rank[])
{
    x = find(x, parent);
    y = find(y, parent);
    if (rank[x] < rank[y])
        parent[x] = y;
    else if (rank[x] > rank[y])
        parent[y] = x;
    else
    {
        parent[y] = x;
        rank[x]++;
    }
}

int main()
{
    int n, m;
    cin >> n >> m;
    vector<vector<int>> edges;
    for (int i = 0; i < m; i++)
    {
        int u, v, w;
        cin >> u >> v;
        edges.push_back({u, v});
    }
    int parent[n + 1];
    int rank[n + 1];
    for (int i = 1; i <= n; i++)
    {
        parent[i] = i;
        rank[i] = 0;
    }
    int count = 0;
    for (auto i : edges)
    {
        int u = i[0];
        int v = i[1];
        int x = find(u, parent);
        int y = find(v, parent);
        if (x != y)
        {
            union1(u, v, parent, rank);
        }
        else
            count++;
    }
    cout << pow(2, count);
}