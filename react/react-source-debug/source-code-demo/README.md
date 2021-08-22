git config --global user.name "王冰洋"
git config --global user.email "wangbingyang@doushen.com"

Create a new repository
git clone git@code.doushen-int.com:omo/allSales-admin.git
cd allSales-admin
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master

Push an existing folder
cd existing_folder
git init
git remote add origin git@code.doushen-int.com:omo/allSales-admin.git
git add .
git commit -m "Initial commit"
git push -u origin master

Push an existing Git repository
cd existing_repo
git remote rename origin old-origin
git remote add origin git@code.doushen-int.com:omo/allSales-admin.git
git push -u origin --all
git push -u origin --tags
