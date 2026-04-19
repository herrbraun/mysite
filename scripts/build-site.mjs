import { cp, mkdir, rm } from "node:fs/promises";
import { spawn } from "node:child_process";
import { resolve } from "node:path";

const rootFiles = ["index.html", "christmas.html", "CNAME", "bgm.mp3"];
const rootDirs = ["shengdan_image"];

async function run(command, args) {
  await new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      shell: true,
      stdio: "inherit",
    });

    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${command} ${args.join(" ")} exited with ${code}`));
      }
    });
  });
}

await rm("dist", { recursive: true, force: true });
await rm("blogs/blogs/dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });

for (const file of rootFiles) {
  await cp(file, `dist/${file}`);
}

for (const dir of rootDirs) {
  await cp(dir, `dist/${dir}`, { recursive: true });
}

await run("npx", ["honkit", "build", resolve("blogs/blogs"), resolve("dist/blog")]);
