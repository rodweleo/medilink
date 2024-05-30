import simpleGit from 'simple-git';
const git = simpleGit();

(async () => {
  try {
    // Step 1: Fetch the latest changes
    await git.fetch();

    // Step 2: Find the commit hash of the offending commit
    const log = await git.log();
    const commitToRemove = log.all.find(commit => commit.message.includes('implemented the client side AI helper for medical consultancy purposes'));

    if (commitToRemove) {
      // Step 3: Interactive rebase to remove the commit
      const commitHash = commitToRemove.hash;
      await git.rebase(['-i', `${commitHash}^`]);

      // Step 4: Edit the rebase-todo file to remove the offending commit
      const fs = require('fs');
      const rebaseTodoPath = '.git/rebase-merge/git-rebase-todo';
      let rebaseTodo = fs.readFileSync(rebaseTodoPath, 'utf8');
      rebaseTodo = rebaseTodo.replace(new RegExp(`pick ${commitHash}.*\\n`), '');
      fs.writeFileSync(rebaseTodoPath, rebaseTodo);

      // Step 5: Continue the rebase
      await git.rebase(['--continue']);
      
      // Step 6: Force push the changes
      await git.push('origin', 'main', {'--force': null});

      console.log('Commit removed and changes pushed successfully.');
    } else {
      console.log('No commit with the specified message found.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
})();
