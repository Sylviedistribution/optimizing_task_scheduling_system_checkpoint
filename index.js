const readline = require("readline");
/**
 * Create readline interface for CLI interaction
 */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
/**
 * Prompt helper to get async user input
 */
function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

var bytes_per_task = 70;

class Task {
  constructor(name, start, end, priority) {
    this.name = name;
    this.start = start;
    this.end = end;
    this.priority = priority;
  }
}

const tasks = [];

function addTask(task) {
  tasks.push(task);
}

function sortTasksByStartTime(tasks) {
  return tasks.sort((a, b) => a.start - b.start);
}

function groupTasksByPriority(tasks) {
  const groupedTasks = {};
  tasks.forEach((task) => {
    if (!groupedTasks[task.priority]) {
      groupedTasks[task.priority] = [];
    }
    groupedTasks[task.priority].push(task);
  });
  return groupedTasks;
}

function overlapTasks(tasks) {
  sortedTasks = [...tasks].sort((a, b) => a.start - b.start);
  const overlappingTasks = [];
  for (let i = 0; i < sortedTasks.length - 1; i++) {
    if (sortedTasks[i].end > sortedTasks[i + 1].start) {
      overlappingTasks.push(sortedTasks[i]);
      overlappingTasks.push(sortedTasks[i + 1]);
      i++; // Skip the next task as it's already included
    }
  }
  return overlappingTasks;
}

function estimateTaskMemory(tasks) {
  //average estimate (name:50, start: 8, end: 8, priority: 4)
  const totalBytes = tasks.length * bytes_per_task;

  return {
    tasks: tasks.length,
    bytes: totalBytes,
    kb: (totalBytes / 1024).toFixed(2),
    mb: (totalBytes / 1024 / 1024).toFixed(4),
  };
}

function estimateAddTaskMemory() {
  return {
    space: "O(1)",
    estimatedBytes: 0,
  };
}

function estimateSortMemory() {
  return {
    space: "O(1)",
    estimatedBytes: 0,
  };
}

function estimateGroupMemory(tasks) {
  const totalBytes = tasks.length * bytes_per_task;

  return {
    space: "O(n)",
    estimatedBytes: totalBytes,
    kb: (totalBytes / 1024).toFixed(2),
  };
}

function estimateOverlapMemory(tasks) {
  const totalBytes = tasks.length * bytes_per_task;

  return {
    space: "O(n)",
    estimatedBytes: totalBytes,
    kb: (totalBytes / 1024).toFixed(2),
  };
}

displayMenu = function () {
  console.log(`Tasks Management System: \n
        1. Add Task\n
        2. Sort Tasks by Start Time\n
        3. Group Tasks by Priority\n
        4. Check Overlapping Tasks\n
        5. Estimate Memory Usage\n
        6. Exit`);
};

async function runProgram() {
  while (true) {
    displayMenu();
    const choice = parseInt(await prompt("Enter your choice: "));

    switch (choice) {
      case 1:
        console.log("Adding a new task:");
        const name = await prompt("Enter task name: ");
        const start = parseInt(await prompt("Enter task start time: "));
        const end = parseInt(await prompt("Enter task end time: "));
        do {
          console.log("Priority must be between 1 and 3.");
          var priority = parseInt(
            await prompt("Enter task priority (1: High, 2: Medium, 3: Low): "),
          );
        } while (priority < 1 || priority > 3);

        addTask(new Task(name, start, end, priority));
        break;

      case 2:
        const sortedTasks = sortTasksByStartTime(tasks);
        console.log("Tasks sorted by start time:");
        sortedTasks.forEach((tasks, i) => {
          console.log(
            ` Task: ${i + 1}, Name: ${tasks.name}, Start: ${tasks.start}, End: ${tasks.end}, Priority: ${tasks.priority}`,
          );
        });
        break;

      case 3:
        const groupedTasks = groupTasksByPriority(tasks);
        console.log("Tasks grouped by priority:");
        // Display grouped tasks with Object.keys
        for (const priority in groupedTasks) {
          console.log(` Priority ${priority}:`);
          groupedTasks[priority].forEach((task, i) => {
            console.log(`  Task ${i + 1}: ${task.name}`);
          });
        }
        break;

      case 4:
        const overlappingTasks = overlapTasks(tasks);
        if (overlappingTasks.length === 0) {
          console.log("No overlapping tasks found.");
        } else {
          console.log("Overlapping tasks found:");
          overlappingTasks.forEach((task, i) => {
            console.log(`  Task ${i + 1}: ${task.name}`);
          });
        }
        break;

      case 5:
        console.log("\n--- Memory Usage Dashboard ---");

        const global = estimateTaskMemory(tasks);
        console.log(`Total tasks: ${global.tasks}`);
        console.log(`Estimated memory: ${global.kb} KB (${global.mb} MB)`);

        console.log("\nPer Function Space Complexity:");

        console.log("Add Task →", estimateAddTaskMemory());
        console.log("Sort Tasks →", estimateSortMemory());

        console.log("Group Tasks →", estimateGroupMemory(tasks));
        console.log("Overlap Tasks →", estimateOverlapMemory(tasks));

        break;

      case 6:
        console.log("Exiting program.");
        rl.close();
        return;
    }
  }
}
runProgram();
