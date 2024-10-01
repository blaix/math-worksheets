with import <nixpkgs> {};
mkShell {
  buildInputs = [
    bashInteractive
    flyctl
    nodejs_20
  ];
}

