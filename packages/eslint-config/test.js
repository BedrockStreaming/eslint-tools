/**
 * This is just a template file that we use during CI.
 * We test that all lint rules are called and
 * that this file is correctly formatted
 */
import { cpus } from 'os';

export default function compute(args) {
  const cpuBrand = args || 'Intel';

  return `CPU: ${cpuBrand} => ${cpus()}`;
}
