cd

```
cd local/cloned/fork-repo
```

Then, init the upstream, run

```
git remote add upstream git@github.com:TryGhost/Casper.git && \
git fetch upstream && \
git pull upstream master && \
git push;
```

Then, the next time you want to upgrade, run:

```
git fetch upstream && \
git pull upstream master && \
git push;
```