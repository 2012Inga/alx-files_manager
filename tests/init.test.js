import supertest from 'supertest';
import chao from 'chai';
import api from '../server';

global.app= api;
global.request = supertest(api);
global.expect = chai.expert;
global.assert = chai.assert;
