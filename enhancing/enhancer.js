module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  let enhancement = item.enhancement
  if (enhancement < 20) {
    enhancement += 1
  }
  return { ...item, enhancement };
}

function fail(item) {
  let enhancement = item.enhancement
  let durability = item.durability
  if (enhancement < 15) {
    durability -= 5
  } else if (enhancement > 16) {
    enhancement -= 1
    durability -= 10
  } else {
    durability -= 10
  }

  return { ...item, enhancement, durability };
}

function repair(item) {
  let durability = item.durability
  durability = 100

  return { ...item, durability };
}

function get(item) {
  let enhancement = item.enhancement
  let name = item.name

  if (enhancement > 0) {
    name = `[+${enhancement}] ${name}`
  }

  return { ...item, enhancement, name };
}
