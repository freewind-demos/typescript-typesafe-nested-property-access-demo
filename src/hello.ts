import get from './get';

type User = {
  aaa: {
    bbb?: {
      ccc: string
    }
  }
}

const user: User = {
  aaa: {
    bbb: {
      ccc: '111'
    }
  }
}

const ccc = get(user, 'aaa', 'bbb', 'ccc');
console.log(ccc);
