import { readFileSync, writeFileSync } from 'fs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageRepository {
  async findOne(id: string) {
    const contents = readFileSync('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages[id];
  }
  async findAll() {
    const contents = readFileSync('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages;
  }
  async create(message: string) {
    const contents = readFileSync('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    const id = (Object.keys(messages).length + 1).toString();
    messages[id] = { id, content: message };
    writeFileSync('messages.json', JSON.stringify(messages));
    return messages;
  }
}
