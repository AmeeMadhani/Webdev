//if given the number of users, number of links and every two nodes having a link between each other. find out whether all the users are somehow connected to each other or not
//if yes, print the number of links required to connect all the users
//if no, print -1

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;
vector<int> adj[100000];
bool visited[100000];

void dfs(int u)
{
    visited[u] = true;
    for(int i = 0; i < adj[u].size(); i++)
    {
        int v = adj[u][i];
        if(!visited[v])
            dfs(v);
    }
}

int main(){
    int n, m;
    cout << "enter no. of user as nodes: ";
    cin >> n >> m;
    for(int i = 0; i < m; i++)
    {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }
    int count = 0;
    for(int i = 1; i <= n; i++)
    {
        if(!visited[i])
        {
            dfs(i);
            count++;
        }
    }
    if(count == 1)
        cout << m - n + 1 << endl;
    else
        cout << -1 << endl;
    return 0;
}