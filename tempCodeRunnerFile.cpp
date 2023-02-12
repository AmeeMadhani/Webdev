
#include<iostream>
using namespace std;
int main()
{
    int n;
    cout<<"Enter no. of atoms: ";
    cin>>n;
    int a[n][n];
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<n;j++)
        {
            a[i][j]=0;
        }
    }
    char ch;
    do
    {
        int x,y;
        cout<<"Enter the first vertex of the edge in the graph: ";
        cin>>x;
        cout<<"Enter the second vertex of the edge in the graph: ";
        cin>>y;
        a[x][y]=1;
        a[y][x]=1;
        cout<<"Do you want to continue creating undirected graph? Enter choice:'y' or 'n': ";
        cin>>ch;
    }while(ch=='y');
    int count=0;
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<n;j++)
        {
            if(a[i][j]==1)
            {
                count++;
            }
        }
        if(count==n-1)
        {
            cout<<"Does the given undirected graph contain cycle?"<<endl;
            cout<<"The given undirected graph does not contain cycle"<<endl;
            break;
        }
        else
        {
            cout<<"Does the given undirected graph contain cycle?"<<endl;
            cout<<"The given undirected graph contains cycle"<<endl;
            break;
        }
    }
    return 0;
}